
interface SponsorLogoProps {
  image: string;
}

export default function SponsorLogo({ image }: SponsorLogoProps) {
  return (
    <div 
      className="h-8 w-24 bg-contain bg-center bg-no-repeat" 
      style={{ backgroundImage: `url('${image}')` }}
    ></div>
  );
}
