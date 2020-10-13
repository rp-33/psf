import ImagePicker from 'react-native-image-crop-picker';

export const camera = (setImage) => {
    ImagePicker.openCamera({
        width: 400,
        height: 400,
        cropping: true
    })
    .then(image => {
       setImage(image.path)
    })
    .catch(err=>{
    
    })
};


export const gallery = (setImage,multiple=false) => {
    ImagePicker.openPicker({
        width: 400,
        height: 400,
        cropping: true,      
        multiple: multiple
    })
    .then(images => {

        if(!multiple) return setImage(images.path)

        let newImages = [];
        images.forEach((image,index)=>{
            newImages.push(image.path)
        })
        setImage(newImages)

    })
    .catch(err => {
       
    })
}

