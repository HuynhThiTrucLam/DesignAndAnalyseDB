import "./Star.scss";
// Helper function to render stars based on the rating
const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating); // Full stars are the integer part of the rating
  const halfStars = rating % 1 >= 0.5 ? 1 : 0; // Display half star if the rating is >= .5
  const emptyStars = 5 - fullStars - halfStars; // Remaining stars are empty

  return (
    <>
      {/* Full stars */}
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <span key={`full-${index}`} className="star full">
            &#9733; {/* Solid full star */}
          </span>
        ))}
      {/* Half star */}
      {halfStars > 0 && (
        <span className="star half">&#9733; {/* Half star */}</span>
      )}
      {/* Empty stars */}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <span key={`empty-${index}`} className="star empty">
            &#9734; {/* Hollow empty star */}
          </span>
        ))}
    </>
  );
};

export default renderStars;
