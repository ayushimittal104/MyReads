import React from 'react';
export const starsvg = (id,rating) =>{
    let fullStar = parseInt(rating);
    let halfStar = rating % 1 ;
    let i=0;
    let halfStarSvg = (id,hf) =><svg key={id+hf} xmlns="http://www.w3.org/2000/svg" id="color" enableBackground="new 0 0 24 24" height="15" viewBox="0 0 24 24" width="15">
                        <defs>
                            <linearGradient id="half_grad">
                                <stop offset="50%" stopColor="#ffc107"></stop>
                                <stop offset="50%" stopColor="white" stopOpacity="1"></stop>
                            </linearGradient>
                        </defs>
                        <path d="m23.363 8.584-7.378-1.127-3.307-7.044c-.247-.526-1.11-.526-1.357 0l-3.306 7.044-7.378 1.127c-.606.093-.848.83-.423 1.265l5.36 5.494-1.267 7.767c-.101.617.558 1.08 1.103.777l6.59-3.642 6.59 3.643c.54.3 1.205-.154 1.103-.777l-1.267-7.767 5.36-5.494c.425-.436.182-1.173-.423-1.266z" fill="url(#half_grad)" strokeWidth="0.5" stroke="goldenrod"/>
                    </svg>
    let FullStarSvg = (id,i) => <svg key={id+i}xmlns="http://www.w3.org/2000/svg" id="color" enableBackground="new 0 0 24 24" height="15" viewBox="0 0 24 24" width="15">
                        <path d="m23.363 8.584-7.378-1.127-3.307-7.044c-.247-.526-1.11-.526-1.357 0l-3.306 7.044-7.378 1.127c-.606.093-.848.83-.423 1.265l5.36 5.494-1.267 7.767c-.101.617.558 1.08 1.103.777l6.59-3.642 6.59 3.643c.54.3 1.205-.154 1.103-.777l-1.267-7.767 5.36-5.494c.425-.436.182-1.173-.423-1.266z" fill="#ffc107" strokeWidth="0.5" stroke="goldenrod"/>
                    </svg>
    let avgRating = [];
    while(i<fullStar) {
        avgRating.push(FullStarSvg(id,i))
        i=i+1;
    }
    if(halfStar === 0.5){
        avgRating.push(halfStarSvg(id,"hs"))
    }
    return(
        <div style={{color: 'red',fontSize:'0.8em'}}>Average Rating : 
            <br />
            {avgRating}
        </div>
    )
}