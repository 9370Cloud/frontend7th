import './CodeUi.css'

function CodeUi(){

    const aboutMe = {
        name: '승혁 김',
        job: '백수',
        contact: {
          email: '개인 프라이버시임',
          website: '여기임'
        }
      };

    return( <div className="card">
    <div className="card-back">
      <div className="line-numbers">
        {Array.from({ length: 9 }, (_, index) => (
          <div key={index}>{index + 1}</div>
        ))}
      </div>
      <code>
        <span className="variable">const </span>
        <span className="function">aboutMe </span>
        <span className="operator">= </span>
        <span>{'{'}</span>
        <div className="indent">
          <span className="property">name</span>
          <span className="operator">: </span>
          <span className="string">'{aboutMe.name}'</span>
          <span>,</span>
        </div>
        <div className="indent">
          <span className="property">job</span>
          <span className="operator">: </span>
          <span className="string">'{aboutMe.job}'</span>
          <span>,</span>
        </div>
        <div className="indent">
          <span className="property">contact</span>
          <span className="operator">: </span>
          <span>{'{'}</span>
          <div className="indent">
            <span className="property">email</span>
            <span className="operator">: </span>
            <span className="string">'{aboutMe.contact.email}'</span>
            <span>,</span>
          </div>
          <div className="indent">
            <span className="property">website</span>
            <span className="operator">: </span>
            <span className="string">'{aboutMe.contact.website}'</span>
          </div>
          <span>{'}'}</span>
        </div>
        <span>{'}'}</span>
      </code>
    </div>
  </div>)
}

export default CodeUi