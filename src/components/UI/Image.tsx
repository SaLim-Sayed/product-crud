interface ImageProps {
  ImgURL: string;
  alt: string;
  className?: string;
}

const Image = ({ ImgURL, alt, className }: ImageProps) => {
  return <img src={ImgURL} alt={alt} className={className} />;
};

export default Image;
