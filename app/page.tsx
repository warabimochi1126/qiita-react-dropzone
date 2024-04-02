"use client"
import { useDropzone } from "react-dropzone";

export default function Home() {
  const onDrop = (files: File[]) => {
    console.log(files);
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} 
    style={ isDragActive ? 
    { border: "1px solid #3eb370", width: 200, height: 150, marginTop: 25, marginLeft: 50} : 
    { border: "1px solid #ff7f50", width: 200, height: 150, marginTop: 25, marginLeft: 50}}>
      <input {...getInputProps()} />
      <p>ここにファイルをドラッグ&ドロップしてください。</p>
    </div>
  );
}

