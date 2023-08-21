import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

import React from "react";

const NewsAllData = ({data}) => {
    const {newsCategory, newsTitle, newsDescription, newsPreviewImage, newsLink, _id} = data;
    return (
        <Card className="mt-6 w-96">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            src={newsPreviewImage}
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {newsTitle}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter>
      </Card>
    );
 };
 
 export default NewsAllData;