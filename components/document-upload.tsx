'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FileUp, Upload } from 'lucide-react'

export function DocumentUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file)
    }
  }

  const handleUpload = () => {
    if (selectedFile) {
      // Here you would typically handle the file upload
      console.log('Uploading file:', selectedFile.name)
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-[#FFE990]">Upload Document</h2>
      <div className="border-2 border-dashed border-[#CD7F32]/30 rounded-lg p-8 text-center space-y-4">
        <div className="flex flex-col items-center gap-2">
          <FileUp className="w-12 h-12 text-[#CD7F32]" />
          <p className="text-[#FFE990]">Upload your legal document (PDF)</p>
          <p className="text-sm text-[#FFE990]/70">Maximum file size: 10MB</p>
        </div>
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="hidden"
          id="file-upload"
        />
        <label htmlFor="file-upload">
          <Button 
            variant="outline" 
            className="border-[#CD7F32] text-[#FFE990] hover:bg-[#CD7F32]/20"
          >
            <Upload className="w-4 h-4 mr-2" />
            Select PDF File
          </Button>
        </label>
        {selectedFile && (
          <div className="mt-4">
            <p className="text-[#FFE990]">Selected: {selectedFile.name}</p>
            <Button 
              onClick={handleUpload}
              className="mt-2 bg-[#CD7F32] hover:bg-[#CD7F32]/90 text-white"
            >
              Process Document
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

