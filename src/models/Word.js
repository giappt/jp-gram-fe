export const Word = (props) => {
  console.log(props);
  return (
    // <div className="word">
    //     <div>{props.word.key} </div>
    //     <p>{props.word.content[0]}</p>
    // </div>
    // <div class="accordion word" id={`accordionExample${props.id}`}>
    <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapse${props.id}`} aria-expanded="false" aria-controls={`panelsStayOpen-collapse${props.id}`}>
        {props.word.key}
      </button>
    </h2>
    <div id={`panelsStayOpen-collapse${props.id}`} class="accordion-collapse collapse"  data-bs-parent="#accordionWords">
      <div class="accordion-body">
        {props.word.content.map(w=><p>{w}</p>)}
      </div>
    </div>
  </div>
  );
};
