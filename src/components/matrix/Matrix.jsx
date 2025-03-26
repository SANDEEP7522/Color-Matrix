import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export const MatrixColorChange = () => {
  const [mtx, setMtx] = useState(Array(9).fill(null));
  const [click, setClick] = useState([]);

  const handleClick = (i) => {
    if (mtx[i] === null) {
      const newMtx = [...mtx];
      newMtx[i] = "green";
      setMtx(newMtx);
      setClick([...click, i]);
    }

    if (click.length === 8 && mtx[i] === null) {
      const orangeMtx = [...mtx];
      orangeMtx[i] = "green";
      setMtx(orangeMtx);
      setClick([...click, i]);

      setTimeout(() => {
        const finalMtx = [...mtx];
        click.forEach((click) => {
          finalMtx[click] = "orange";
        });
        finalMtx[i] = "orange";
        setMtx(finalMtx);
      }, 2000);
    }
  };

  return (
    <div className="mx-auto flex flex-col items-center justify-center">
      <h1 className="text-5xl mt-5 ">3X3 Matrix</h1>
      <div className="flex flex-col items-center justify-center min-h-screen mt-[-6rem]">
        <div className="grid grid-cols-3 gap-2">
          {mtx.map((color, index) => (
            <Button
              key={index}
              className={`w-20 h-20 ${
                color === "green"
                  ? "bg-green-500"
                  : color === "orange"
                  ? "bg-orange-500"
                  : "bg-gray-200"
              }`}
              onClick={() => handleClick(index)}
            ></Button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Explanation:
//  * State Management:
//    * matrix: An array of length 9, representing the 3x3 matrix. Each element stores the color of the corresponding cell (null, 'green', or 'orange').
//    * clickedIndices: An array that stores the indices of the cells that have been clicked, in the order they were clicked.
//  * Rendering the Matrix:
//    * A grid grid-cols-3 gap-2 div creates the 3x3 grid layout using Tailwind CSS.
//    * matrix.map() iterates through the matrix array to render each cell as a Button component from the Shadcn UI library.
//    * Conditional class names are used to set the background color of each button based on its color value.
//  * handleClick Function:
//    * When a button is clicked, this function is called with the index of the clicked cell.
//    * If the cell is not yet colored (matrix[index] === null), it's colored green, and its index is added to clickedIndices.
//    * When the 9th box is clicked (length of clickedIndices is 8, and the current box is null), it colors the current box green, then, after a short delay, all the clicked boxes are colored orange, in the order of the clicks.
//  * Tailwind CSS:
//    * Tailwind CSS classes are used for styling, including grid layout (grid grid-cols-3), spacing (gap-2), background colors (bg-green-500, bg-orange-500, bg-gray-200), and element sizing (w-20 h-20).
//    * flex classes are used to center the matrix on the screen.
//  * Shadcn UI Button:
//    * The Shadcn UI Button component provides a consistent and styled button element.
//    * The className prop is used to apply Tailwind CSS classes to customize the button's appearance.
//    * The onClick prop attaches the handleClick function to the button's click event.
//    * The key prop is used to help react identify each button.
//    * The timeout is used to allow the final green click to show, before the orange change.
//    * The matrix is updated to reflect the new colors.
