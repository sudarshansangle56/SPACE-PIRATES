import React from 'react'

function Acard({Headline,paragraph,Link1}) {
  return (
    <div>
      <div className="about1">
        <div className="rev">
        {Link1 && <img src={Link1} alt="Card" />}
            <h2>{Headline}</h2>
        </div>
            <p>
             {paragraph}
            </p>
          </div>
    </div>
  )
}

export default Acard
