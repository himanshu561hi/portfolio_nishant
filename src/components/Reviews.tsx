import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Review {
  id: number;
  name: string;
  role: string;
  company: string;
  rating: number;
  content: string;
  avatar: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "satradingzone",
    role: "",
    company: "",
    rating: 4,
    content: "Working with Nishant has been amazing! The edits were clean, creative, and exactly what I had in mind. Fast delivery, zero stress — highly recommend!",
    avatar: "ST"
  },
  {
    id: 2,
    name: "thelipbunnybeauty",
    role: "",
    company: "",
    rating: 5,
    content: "Loved working with them! The edits were clean, creative, and on point. Quick turnaround, smooth communication — made the whole process super easy",
    avatar: "TL"
  },
  {
    id: 3,
    name: "petermollofitness",
    role: "",
    company: "",
    rating: 4,
    content: "Really impressed with the editing quality. Quick turnaround, great communication, and the final result was exactly what I needed. Truly impressed!",
    avatar: "PF"
  },
  {
    id: 4,
    name: "jmoreng",
    role: "",
    company: "",
    rating: 5,
    content: "They made the whole editing process so easy. Loved the pacing, transitions, and overall vibe. Definitely working with them again!",
    avatar: "JM"
  }
];

const Reviews = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "fill-primary text-primary" : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-background via-primary/5 to-accent-purple/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent-purple bg-clip-text ">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our amazing clients have to say about their experience.
          </p>
        </div>

        {/* <div className="relative"> */}
          <div className="flex gap-6 overflow-x-auto pb-6 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {reviews.map((review) => (
              <Card
                key={review.id}
                className="flex-shrink-0 w-80 bg-card/80 backdrop-blur-sm border border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {renderStars(review.rating)}
                    </div>
                    <Quote className="w-6 h-6 text-primary/60 group-hover:text-primary transition-colors" />
                  </div>
                  
                  <p className="text-foreground mb-6 leading-relaxed">
                    "{review.content}"
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <Avatar className="w-12 h-12 ring-2 ring-primary/20">
                      <AvatarImage src="#" alt={review.name} />
                      <AvatarFallback className="bg-gradient-to-br from-primary to-primary-glow text-primary-foreground font-semibold">
                        {review.avatar}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div>
                      <h4 className="font-semibold text-foreground">{review.name}</h4>
                      <p className="text-muted-foreground text-sm">
                        {review.role}  {review.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Gradient overlays for scroll indication */}
          <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-background to-transparent pointer-events-none" />
        {/* </div> */}
        
        <div className="text-center mt-8">
          <p className="text-muted-foreground text-sm">
            Scroll horizontally to see more reviews →
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;