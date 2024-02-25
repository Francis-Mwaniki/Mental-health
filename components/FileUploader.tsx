"use client";
import { Inbox, Loader2 } from 'lucide-react';
import React from 'react'
import {useDropzone} from "react-dropzone"
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from "next/navigation";
type Props = {}


const FileUpload = () => {
    const router = useRouter();
    const [file, setFile] = React.useState<File | null>(null)
    const [uploading, setUploading] = React.useState<boolean>(false)
    const [file_name, setFileName] = React.useState<string>("")
    const [file_key, setFileKey] = React.useState<string>("")
     const [uploadedFile, setUploadedFile] = React.useState<File | null>(null)
     const [isLoading, setIsLoading] = React.useState<boolean>(false)
    //  const {mutate, isLoading} =useMutation({
    //     mutationFn: async (
    //         [file_name, file_key]:[file_name: string, file_key: string]
    //     ) => {
    //         const response = await axios.post("/api/create-chat", {
    //             file_name,
    //             file_key})
    //         return response.data
    //     },


    //  })
    // cloudName: "dunssu2gi",
    //       uploadPreset: "zao6hc4d",
    const {getRootProps, getInputProps} = useDropzone(
        {
            accept: { "application/pdf": [".pdf"] },
            maxFiles: 1,
            onDrop: async (acceptedFiles:any) => {
                setUploading(true)
                const file = acceptedFiles[0]
                if(!file) {
                    toast.error("Please upload a correct file")
                    return
                }
                if(file?.size > 10 * 1024 * 1024) {
                    toast.error("Please upload a file smaller than 10MB")
                

                    return
                }
                if(file?.type !== "application/pdf") {
                    toast.error("Please upload a PDF file")
                    return
                }
                try {

                    setFile(acceptedFiles[0])
                    console.log(file);
                    await handleCloudinaryUpload(file)
                    setTimeout(() => {
                        setUploading(false)
                    }
                    , 1000)

                    
                    // handleCloudinaryUpload()
                } catch (error) {
                    console.log(error);
                    toast.error("Something went wrong")
                    setUploading(false)
                    
                }
            }
        }
    )
    const handleCloudinaryUpload = async (file: string | Blob) => {
       if(file) {
        const formData = new FormData()
        formData.append("file", file)
        formData.append("upload_preset", "zao6hc4d")
        const res = await fetch("https://api.cloudinary.com/v1_1/dunssu2gi/upload", {
            method: "POST",
            body: formData
        })
        const data = await res.json()
        console.log(data);
        setUploadedFile(data)
        setFileKey(data.public_id)
        setFileName(data.original_filename)

        if(!data) {
            toast.error("Something went wrong")
            return
        }
        console.log(`file name: ${file_name}`);
        console.log(`file key: ${file_key}`);
        
        // mutate([ file_name, file_key],{
        //     onSuccess: (chat_id) => {
        //        toast.success('chat created')
        //         router.push(`/chat/${chat_id}`)
               
                
        //     },
        //     onError: (error) => {
        //         toast.error('File upload failed')
        //         console.log(error);
        //     }

        // })

      
       }

    }
    // React.useEffect(() => {
    //     if (file) {
    //         handleCloudinaryUpload()
    //     }
    // }, [file])

  return (
    <div className="p-2 bg-white rounded-xl">
        <div {...getRootProps()}
            className="w-full h-32 flex justify-center items-center border-2 border-gray-300 border-dashed rounded-xl cursor-pointer flex-col"
            suppressHydrationWarning
        >
            <input {...getInputProps()} />
            { uploading || isLoading ? (
                <>
                <Loader2 className="w-12 h-12 text-blue-800 animate-spin" />
                <p className="text-gray-500 text-sm px-1 mt-2">spilling Tea on GPT...</p>
                </>
            ):(
                 <><Inbox className="w-12 h-12 text-gray-400" /><span
                          className="text-gray-500 text-sm px-1"
                      >Drag &apos;n&apos; drop some files here, or click to select files</span></>
            )}
           
            </div>
            </div>
    
  )
}

export default FileUpload