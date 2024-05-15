'use client'
import { useState } from "react";

const NewTodoForm = () => {
    const [state, updateState] = useState('');
    return (
        <div>
            <form>
                <input type="text"></input>
            </form>
        </div>
    )
}

export default NewTodoForm