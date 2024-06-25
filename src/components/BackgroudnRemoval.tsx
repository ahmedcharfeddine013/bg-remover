"use client";

import React, { ChangeEvent, useState, useCallback } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";
import { bg_remover_api_key } from "@/constants";

const BackgroundRemoval = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setSelectedFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif", ".bmp", ".tiff"],
    },
    maxFiles: 1,
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

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

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <h1 className="text-2xl md:text-4xl font-bold">Background Removal</h1>
      <div
        {...getRootProps()}
        className={`border-2 border-dashed p-4 text-center ${
          isDragActive ? "border-blue-500" : "border-gray-300"
        }`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here...</p>
        ) : (
          <p>Drag & drop an image here, or click to select one</p>
        )}
      </div>
      <Input type="file" onChange={handleFileChange} className="mt-2" />
      <Button onClick={handleUpload} className="mt-2">
        Remove background
      </Button>
      {imageUrl && (
        <div className="mt-4">
          <h1 className="text-2xl font-bold mb-2">Result:</h1>
          <Image
            src={imageUrl}
            width={500}
            height={500}
            alt="result"
            className="max-w-full h-auto"
          />
        </div>
      )}
    </div>
  );
};

export default BackgroundRemoval;
