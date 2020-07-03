import React, { useCallback, useState } from 'react'
import { FiUpload } from 'react-icons/fi';
import { useDropzone } from 'react-dropzone';

import './styles.css'

interface Props{
  onFileUploaded: (file: File) => void;
}

const Dropzone:React.FC<Props> = (props) => {
  const [ selectedFileUrl, setSelectedFileUrl ] = useState('');

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];

    const fileUrl = URL.createObjectURL(file);

    setSelectedFileUrl(fileUrl);
    props.onFileUploaded(file);
  }, [props]);

  const {getRootProps, getInputProps} = useDropzone({
    onDrop,
    accept: 'image/*',
  });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*"/>
      {
        selectedFileUrl 
          ? <img src={selectedFileUrl} alt="Thumbnail"/>
          : (
            <p>
              <FiUpload />
              Selecione a imagem do stabelecimento
            </p>
          )
      }
    </div>
  )
}

export default Dropzone;