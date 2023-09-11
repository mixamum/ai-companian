'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchPage() {
    const [prompt, setPrompt] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [loading, setLoading] = useState(0);

    const router = useRouter();


    const handleSubmit = async (event: any) => {
        try {
            event.preventDefault()
            setLoading(1);
        // const response = await fetch('/api/image', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         prompt
        //     })
        // });

            const response = await axios.post("/api/image", prompt);

            console.log("Response in ai-image " + response)

            // const imageResponse = response;

            // setImageURL(imageResponse)
            // console.log(imageResponse);
            // setImageURL(imageResponse.imageUrl);
            setLoading(0);
            router.refresh();
            // router.push("/");
        } catch (error) {
            console.error(error)
        }
    }

    if (loading) {
        return <Loading></Loading>
    }

    if (imageURL !== '' && loading === 0) {
        return (
            <div className="imageContainer">
                <img src={imageURL}></img>
            </div>
        )
    }

    return (
        <div>
            <div className="search-box">
                <form onSubmit={handleSubmit}>
                    <button className="btn-search"><i className="fa fa-search"></i></button>
                    <input type="text" id="prompt" name="prompt" className="input-search" onChange={(e) => setPrompt(e.target.value)} placeholder="Generate Image with AI ..."></input>
                </form>
            </div>
        </div>
    )
}

function Loading(){
	return <div>Loading...</div>
}