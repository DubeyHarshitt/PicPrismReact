import axios from "axios";

const useUpload = async ({ image, onUploadProgress }) => {
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", image);
      formData.append(
        "upload_preset",
        import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
      );
      formData.append(
        "api_key",
        import.meta.env.VITE_CLOUDINARY_API_KEY
      );

      const config = {
        headers: {
            "Content-Type": "multipart/form-data"
        },
        onUploadProgress,
        withCredentials: false,
      };

      const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
      const res = await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`)

      const data = await res.data;
      if(!data) return console.log("Image Upload Failed");
      return data;

    } catch (error) {
      return error.message;
    }
  };

  return { public_id, secure_url } = await upload();

};

export default useUpload;
