import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProjectCard from './ProjectCard';
import projects from '@/app/projects.json';
import ButtonGroup from './ButtonGroup';
import CustomDot from './CustomDot';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
    slidesToSlide: 1
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const MyCarousel: React.FC = () => {
  return (
    <div className="relative carousel-wrapper">
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={false}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup next={() => {}} previous={() => {}} />}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item"
        arrows={false}
        customDot={<CustomDot onClick={() =>{}} active/>}
        renderDotsOutside={true}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            imageSrc={project.imageSrc}
            Url={project.Url}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default MyCarousel;
