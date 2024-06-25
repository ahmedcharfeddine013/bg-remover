"use client";

import React, { ChangeEvent, useState } from "react";
import axios from "axios";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";
import { bg_remover_api_key } from "@/constants";

const BackgroudnRemoval = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUplaod = async () => {
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
    <div>
      <h1 className="text-4xl">Backghround Removal</h1>
      <Input type="file" onChange={handleFileChange}></Input>
      <Button onClick={handleUplaod}>Remove background</Button>
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

export default BackgroudnRemoval;
