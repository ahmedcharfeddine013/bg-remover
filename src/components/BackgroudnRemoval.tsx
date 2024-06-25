"use client";

import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { Button } from "./ui/button";
import Image from "next/image";
import { bg_remover_api_key } from "@/constants";

const BackgroundRemoval = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif", ".bmp", ".tiff"],
    },
    maxFiles: 1,
  });

  const handleUpload = async () => {
    if (!selectedFile) return;
    const formData = new FormData();
    formData.append("image_file", selectedFile);

    try {
      const res = await axios.post(
        "https://api.remove.bg/v1.0/removebg",
        formData,
        {
          headers: {
            "X-Api-Key": bg_remover_api_key,
            "Content-Type": "multipart/form-data",
          },
          responseType: "blob",
        }
      );
      const blob = new Blob([res.data], { type: "image/png" });
      const url = URL.createObjectURL(blob);
      setImageUrl(url);
      console.log(imageUrl);
    } catch (error) {
      console.log("Error removing background", error);
    }
  };

  // Cleanup URL object to avoid memory leaks
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [previewUrl, imageUrl]);

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="bg-gray-200 w-full p-6 flex flex-col gap-10 items-center justify-center">
        <div>
          {previewUrl && (
            <Image src={previewUrl} alt="Preview" height={600} width={600} />
          )}
        </div>
        <h1 className="text-2xl md:text-4xl font-bold">Background Removal</h1>
        <div
          {...getRootProps()}
          className={`border-2 border-primary border-dashed w-[70%] p-6 text-center ${
            isDragActive ? "border-blue-500" : "border-gray-300"
          }`}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p className="text-gray-400">Drop the files here...</p>
          ) : (
            <div className="space-y-4">
              <Button className="text-lg p-6">Upload Image</Button>
              <p className="text-sm text-gray-400">Drag & drop an image here</p>
            </div>
          )}
        </div>
      </div>
      <p className="text-xs">
        By uploading an image, you agree to our Terms. Removal.AI background
        remover is protected by its Privacy Policy and Terms of Service apply.
      </p>
      <Button onClick={handleUpload} className="mt-2">
        Remove background
      </Button>
      {imageUrl && (
        <div className="mt-4">
          <h1 className="text-2xl font-bold mb-2">Result:</h1>
          <div className="border-2">
            <Image
              src={imageUrl}
              width={500}
              height={500}
              alt="result"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BackgroundRemoval;
