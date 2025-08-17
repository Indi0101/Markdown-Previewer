class Marckdown extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            text_editor: "",
            text_vista:""
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState(
            {text_editor:event.target.value,
            text_vista: event.target.value

            }
        )
    }
    render(){
        return(
            <div id="contenedor" >
                <div id="cont-editor" >
                    <div id="editor-header">Markdown</div>
                    <textarea 
                        id="editor" 
                        rows="25" 
                        cols="60" 
                        value={this.state.text_editor}
                        onChange={this.handleChange} 
                    ></textarea>
                </div>
                <div id="cont-vista" >
                    <div id="vista-header">HTML</div>
                    <div 
                        id="vista" 
                        dangerouslySetInnerHTML ={{__html: marked.parse(this.state.text_editor || "")}}
                    ></div>
                </div>
            </div>
        )
    }
}
ReactDOM.createRoot(document.getElementById("marck_down")).render(<Marckdown />);