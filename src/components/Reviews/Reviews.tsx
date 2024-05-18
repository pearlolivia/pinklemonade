import React, { useState } from "react";
import AppWrapper from "../AppWrapper/AppWrapper";
import Button from "../../common/Button/Button";
import {
    ReviewsWrapper,
    ReviewWriter,
    ReviewWriterWrapper,
    NameInput,
    ReviewInput,
    StarWrapper,
} from "./Reviews.styles";
import star from '../../assets/images/star.png'

const Reviews = () => {
    const [name, setName] = useState<string>('');
    const [review, setReview] = useState<string>('');
    const [rating, setRating] = useState<number>(5);

    const handleSubmit = () => {
        const payload = {
            name,
            review,
            rating,
            date: (new Date()).toISOString().split('T')[0]
        }
        console.log(payload);
    }

    return (
    <AppWrapper>
        <ReviewsWrapper>
            <h5>Been to Pink Lemonade before? Leave us a review!</h5>
            <ReviewWriterWrapper>
                <ReviewWriter>
                    <NameInput
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <ReviewInput
                        placeholder="What did you think?"
                        onChange={(e) => setReview(e.target.value)}
                    />
                </ReviewWriter>
                <div>
                    <StarWrapper>
                        <img
                            src={star}
                            alt='star'
                            onClick={() => setRating(1)}
                        />
                        <img
                            src={star}
                            alt='star'
                            onClick={() => setRating(2)}
                            style={{ opacity: rating >= 2 ? 1 : 0.4 }}
                        />
                        <img
                            src={star}
                            alt='star'
                            onClick={() => setRating(3)}
                            style={{ opacity: rating >= 3 ? 1 : 0.4 }}
                        />
                        <img
                            src={star}
                            alt='star'
                            onClick={() => setRating(4)}
                            style={{ opacity: rating >= 4 ? 1 : 0.4 }}
                        />
                        <img
                            src={star}
                            alt='star'
                            onClick={() => setRating(5)}
                            style={{ opacity: rating >= 5 ? 1 : 0.4 }}
                        />
                    </StarWrapper>
                    <div style={{ height: '28%' }} />
                    <Button onClick={() => handleSubmit()}>Submit</Button>
                </div>
            </ReviewWriterWrapper>
        </ReviewsWrapper>
    </AppWrapper>
)};

export default Reviews;