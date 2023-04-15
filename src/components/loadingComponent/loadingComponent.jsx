import { useState, useEffect } from "react";
import { FadeLoader } from "react-spinners";
import { StyledLoading } from "./styledLoading";

export const LoadingComponent = () => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    },[])

    return(
        <StyledLoading>
            {
                loading ?
                <FadeLoader color="#FF577F" loading={loading} size={150} aria-label="Loading Spinner" data-testid="loader"/>
                : 
                <p>...</p>
            }
        </StyledLoading>
    )
}