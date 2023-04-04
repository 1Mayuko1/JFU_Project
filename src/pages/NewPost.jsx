import React, {useEffect, useState} from 'react';
import {GreyButton, Loader} from "../components";
import {Link} from "react-router-dom";

const NewPost = () => {
    const [load, setLoad] = useState(true)
    const [imageFile, setImageFile] = useState(null)
    const [imageUrl, setImageUrl] = useState('')
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [details, setDetails] = useState('');
    const [paragraphs, setParagraphs] = useState('');
    const [mainTag, setMainTag] = useState('');
    const [tags, setTags] = useState('');

    useEffect(() => {
        setInterval(() => {
            setLoad(false)
        }, 1000)
    }, [])

    const validateFileImage = (fileData) => {
        return true;
    };

    const handleImageFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const isValid = validateFileImage(reader.result);
                if (isValid) {
                    setImageFile(selectedFile);
                } else {
                    console.log('Вы не правильно указали файл картинки.')

                }
            };
            reader.readAsText(selectedFile);
        }
    };

    const formatTags = (str) => {
        let replacedText = str.replace(/[^\w\s,]|_/g, "").replace(/\s/g, "")
        if (replacedText === '') {
            return []
        }
        return replacedText.split(',')
    }

    const validateRegistration = (title, content, details, mainTag, paragraphs, imageUrl, imageFile) => {
        const errors = [];

        if (!title.trim()) {
            errors.push("Title is missing.");
        }

        if (!content.trim()) {
            errors.push("Content is missing.");
        }

        if (!details.trim()) {
            errors.push("Details are missing.");
        }

        if (!mainTag.trim()) {
            errors.push("Main tag is missing.");
        }

        if (!paragraphs.trim()) {
            errors.push("Paragraphs are missing.");
        }

        let image = '';
        if (imageFile && imageUrl) {
            errors.push("Both file and image URL inputs are specified");
        } else if (!imageFile && !imageUrl) {
            errors.push("No file or image URL input is specified");
        } else if (imageFile) {
            if (!/^image\//.test(imageFile.type)) {
                errors.push('Must be an image file');
            }
            image = imageFile;
        } else if (imageUrl) {
            if (!imageUrl) {
                errors.push("Image URL input is empty");
            }

            if (!imageUrl.startsWith("http://") && !imageUrl.startsWith("https://")) {
                errors.push("Image URL must start with http:// or https://");
            }

            image = imageUrl;
        } else {
            errors.push('Something is wrong with the image');
        }

        if (errors.length > 0) {
            console.log(errors)
            return null;
        }

        return {
            id: `${new Date()}`,
            title: title,
            content: content,
            details: details,
            date: `${new Date()}`,
            mainTag: mainTag,
            paragraphs: paragraphs,
            secondaryImages: [],
            tags: formatTags(tags),
            image: image
        };
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let data = (validateRegistration(title, content, details, mainTag, paragraphs, imageUrl, imageFile))
        if(data && typeof data === 'object') {
            console.log(data)
            alert('Данные сохранены, спасибо')
        } else {
            console.log('ERR handleSubmit')
            alert('В заполненных данных есть ошибка или что-то не заполнено, пересмотрите')
        }
    }

    return (
        <div className="bg-gray-50 w-full flex justify-center">

            <div>
                <Loader load={load}/>
            </div>

            <div className="absolute z-[0] w-full h-screen">
                <img className="w-full max-h-[700px] object-cover" src={"https://images.unsplash.com/photo-1605367031760-5522b8a52756?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} alt=""/>
            </div>
            <div className="relative z-[2] w-full flex justify-center items-center my-[10%]">
                <div className="relative z-[2] h-auto w-[90%] md:w-[70%] bg-gray-100 shadow-2xl rounded-2xl px-3 sm:px-10 pb-10">
                    <form onSubmit={handleSubmit}>
                        <div className="pt-10 w-full flex flex-col items-center justify-center">
                            <div className="w-full">
                                <h1 className="font-semibold text-[20px] md:text-[40px] text-gray-700 text-center semiLg:pt-0 pb-10">
                                    Создание поста
                                </h1>
                            </div>
                            <div className="w-[100%] sm:w-[80%]">
                                <label htmlFor="name" className="pb-3 text-center text-[20px] md:text-[25px] block text-md font-medium text-gray-700">
                                    Название - title
                                </label>
                                <div className="flex flex-col pb-10 w-full ">
                                    <textarea value={title} onChange={(event) => setTitle(event.target.value)} placeholder="В Израиле создали лекарство от коронавируса: выздоровление за несколько дней..." className="text-[16px] min-h-[100px] px-5 py-3  bg-gray-100 outline-none text-gray-700 text-[14px] font-poppins bg-gray-100 block w-full mt-1 rounded-md outline-none shadow-md"/>
                                </div>
                            </div>

                            <div className="w-[100%] sm:w-[80%]">
                                <label htmlFor="name" className="pb-3 text-center text-[20px] md:text-[25px] block text-md font-medium text-gray-700">
                                    Контекст - content
                                </label>
                                <div className="flex flex-col pb-10 w-full ">
                                    <textarea value={content} onChange={(event) => setContent(event.target.value)} placeholder="Группа ученых из компании Bonus BioGroup в Хайфе разработала в сжатые сроки лекарство, эффективное против поражения легких при коронавирусной инфекции..." className="text-[16px] min-h-[100px] px-5 py-3  bg-gray-100 outline-none text-gray-700 text-[14px] font-poppins bg-gray-100 block w-full mt-1 rounded-md outline-none shadow-md"/>
                                </div>
                            </div>

                            <div className="w-[100%] sm:w-[80%]">
                                <label htmlFor="name" className="pb-3 text-center text-[20px] md:text-[25px] block text-md font-medium text-gray-700">
                                    Детали - details
                                </label>
                                <div className="flex flex-col pb-10 w-full ">
                                    <textarea value={content} onChange={(event) => setContent(event.target.value)} placeholder="Группа ученых из компании Bonus BioGroup в Хайфе разработала в сжатые сроки лекарство, эффективное против поражения легких при коронавирусной инфекции..." className="text-[16px] min-h-[100px] px-5 py-3  bg-gray-100 outline-none text-gray-700 text-[14px] font-poppins bg-gray-100 block w-full mt-1 rounded-md outline-none shadow-md"/>
                                </div>
                            </div>

                            <div className="w-[100%] sm:w-[80%]">
                                <label htmlFor="name" className="pb-3 text-center text-[20px] md:text-[25px] block text-md font-medium text-gray-700">
                                    Основной текст - paragraphs
                                </label>
                                <div className="flex flex-col pb-10 w-full ">
                                    <textarea value={paragraphs} onChange={(event) => setParagraphs(event.target.value)} placeholder={`В ближайшие дни в больнице "Рамбам" начнется второй этап испытаний на людях препарата MesenCure. Первый этап, проведенный в той же больнице, завершился успешно...`} className="text-[16px] min-h-[170px] px-5 py-3 outline-none text-gray-700 text-[14px] font-poppins bg-gray-100 block w-full mt-1 rounded-md outline-none shadow-md"/>
                                </div>
                            </div>

                            <div className="w-[100%] sm:w-[40%]">
                                <label htmlFor="name" className="pb-3 text-center text-[20px] md:text-[25px] block text-md font-medium text-gray-700">
                                    Главный тег - mainTag
                                </label>
                                <div className="flex flex-col items-start">
                                    <input value={mainTag} onChange={(event) => setMainTag(event.target.value)} placeholder="Израиль" type="text" name="name" className="text-center text-[16px] px-5 py-3 bg-gray-100 outline-none text-gray-700 text-[14px] font-poppins block w-full mt-1 border-gray-300 rounded-md shadow-md"/>
                                </div>
                            </div>

                            <div className="w-[100%] sm:w-[80%] pt-[60px]">
                                <label htmlFor="name" className="pb-3 text-center text-[20px] md:text-[25px] block text-md font-medium text-gray-700">
                                    Дополнительные теги (через запятую)
                                </label>
                                <div className="flex flex-col pb-10 w-full ">
                                    <textarea value={tags} onChange={(event) => setTags(event.target.value)} placeholder="История, Израиль, Мир, Украина..." className="text-[16px] min-h-[100px] px-5 py-3 bg-gray-100 outline-none text-gray-700 text-[14px] font-poppins bg-gray-100 block w-full mt-1 rounded-md outline-none shadow-md"/>
                                </div>
                            </div>

                            <div className="mb-10">
                                <p className="pb-3 text-center text-[20px] md:text-[25px] block text-md font-medium text-gray-700">
                                    Выберете один из двух способов добавления изображения
                                </p>
                            </div>

                            <div className="w-[100%] sm:w-[30%]">
                                <label htmlFor="name" className="pb-3 text-center text-[20px] md:text-[25px] block text-md font-medium text-gray-700">
                                    Если у вас есть файл:
                                </label>
                                <div className="flex flex-col items-start">
                                    <input onChange={handleImageFileChange} placeholder="Израиль" type="file" name="name" className="text-center text-[16px] px-5 py-3 bg-gray-100 outline-none text-gray-700 text-[14px] font-poppins block w-full mt-1 border-gray-300 rounded-md shadow-md"/>
                                </div>
                            </div>

                            <div className="w-[100%] sm:w-[80%]">
                                <label htmlFor="name" className="pt-10 pb-3 text-center text-[20px] md:text-[25px] block text-md font-medium text-gray-700">
                                    Если у вас есть ссылка:
                                </label>
                                <div className="flex flex-col items-start">
                                    <input value={imageUrl} onChange={(event) => setImageUrl(event.target.value)} placeholder="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3BhcGVyJTIwd2ViJTIwc2l0ZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" type="text" name="name" className="text-center text-[16px] px-5 py-3 bg-gray-100 outline-none text-gray-700 text-[14px] font-poppins block w-full mt-1 border-gray-300 rounded-md shadow-md"/>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-between mt-10">
                                <div onClick={handleSubmit} className="p-5">
                                    <div className="group border-2 border-[#616161] shadow-sm cursor-pointer flex-1 min-w-[200px] bg-gray-100 rounded-lg border">
                                        <div className="flex-1 flex justify-center items-center flex-row m-3">
                                            <button type="button" className="text-sm font-medium text-gray-900 outline-none items-center text-gray-700 font-semibold">
                                                Опубликовать
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <Link to={`/`}>
                                        <div className="group border-2 border-[#616161] shadow-sm cursor-pointer flex-1 min-w-[200px] bg-gray-100 rounded-lg border">
                                            <div className="flex-1 flex justify-center items-center flex-row m-3">
                                                <button type="button" className="text-sm font-medium text-gray-900 outline-none items-center text-gray-700 font-semibold">
                                                    Домой
                                                </button>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default NewPost;
