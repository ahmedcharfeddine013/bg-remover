"use client";

import React, { ChangeEvent, useState } from "react";
import axios from "axios";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";

const BackgroudnRemoval = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div>
      <h1 className="text-4xl">Backghround Removal</h1>
      <Input type="file" onChange={handleFileChange}></Input>
      <Button>Remove background</Button>
      {imageUrl && (
        <div className="mt-4">
          <h1 className="text-2xl font-bold mb-2">Result:</h1>
          <Image src={imageUrl} alt="result" className="max-w-full h-auto" />
        </div>
      )}
    </div>
  );
};

export default BackgroudnRemoval;
