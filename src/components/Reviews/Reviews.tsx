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
    Heading,
    StarCounter,
    DateInput,
    ReviewGrid,
    ReviewBox,
    TopBar,
    Reviewer,
    Star,
    SubmitWrapper,
} from "./Reviews.styles";
import star from '../../assets/images/star.png';
import { dummyData } from "./dummyData";

const Reviews = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [eventDate, setEventDate] = useState<string>('');
    const [review, setReview] = useState<string>('');
    const [feedback, setFeedback] = useState<string>('');
    const [rating, setRating] = useState<number>(5);
    const [showThankYou, setShowThankYou] = useState<boolean>(false);

    const handleSubmit = () => {
        const payload = {
            name,
            email,
            eventDate,
            review,
            feedback,
            rating,
            approved: 0,
            date: (new Date()).toISOString().split('T')[0],
        }
        console.log(payload);
        setShowThankYou(true);
    }

    const ThankYou = () => (
        <StarCounter>
            Thank you for your feedback, {name}!
        </StarCounter>
    );

    return (
    <AppWrapper>
        <ReviewsWrapper>
            <Heading>Been to Pink Lemonade before? Leave us a review!</Heading>
            {showThankYou ? (<ThankYou />) : (
                <>
                    <ReviewWriterWrapper>
                        <ReviewWriter>
                            <NameInput
                                placeholder="Name"
                                onChange={(e) => setName(e.target.value)}
                            />
                            <NameInput
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <div>
                                <label>Date of event: </label>
                                <DateInput
                                    type='date'
                                    onChange={(e) => setEventDate(e.target.value)}
                                />
                            </div>
                            <ReviewInput
                                placeholder="What did you think? Venue, Music, Vibes, Price?"
                                onChange={(e) => setReview(e.target.value)}
                            />
                            <ReviewInput
                                placeholder="What kind of things do you want to see from us in future? Themes, classes, drinks?"
                                onChange={(e) => setFeedback(e.target.value)}
                            />
                        </ReviewWriter>
                        <SubmitWrapper>
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
                            <StarCounter>{rating} / 5</StarCounter>
                            <Button onClick={() => handleSubmit()}>Submit</Button>
                        </SubmitWrapper>
                    </ReviewWriterWrapper>
                </>
            )}
            <ReviewGrid>
                        {dummyData.reviews.map(review => (
                            <ReviewBox>
                                <TopBar>
                                    <Star
                                        src={star}
                                        alt='star'
                                    />
                                    <div><b>{review.rating}</b> / 5</div>
                                    <Reviewer>
                                        <span>{review.name}</span>
                                        <span>{review.date.split("-").reverse().join("/")}</span>
                                    </Reviewer>
                                </TopBar>
                                <div>
                                    {review.review}
                                </div>
                            </ReviewBox>
                        ))}
                    </ReviewGrid>
        </ReviewsWrapper>
    </AppWrapper>
)};

export default Reviews;