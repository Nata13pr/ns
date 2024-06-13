import logo from './logo.svg';
import './App.css';
import {useState,useRef} from 'react';

function App() {

    const [data, setData] = useState(null);
    const inputRef = useRef(null);
    console.log('data', data);
    const updateFile = async (e) => {
        const file = e.target.files[0];
        console.log('file', file);
        const formData = new FormData();
        formData.append("image", file);
        setData(formData);
    };

    const uploadFile = async () => {
        try {
            const response = await fetch("http://localhost:3000/upload", {
                method: "POST",
                body: data,
            });
            console.log('response', response);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const result = await response.json();
            console.log(result);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <input
                type="file"
                id="inputtag"
                ref={inputRef}
                onChange={updateFile}
            />
            <button
                className="btn"
                onClick={uploadFile}
                disabled={!data}
            >
                Upload
            </button>
        </div>
    );
};
export default App;
