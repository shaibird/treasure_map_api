

export const UploadImageButton = ({ setUploadImage }) => {

    const handleUploadImageForm = () => {
        setUploadImage(true);
    }

    return <>
        <div>
            <><button onClick={handleUploadImageForm}>Upload Image</button></>
        </div>


    </>
}