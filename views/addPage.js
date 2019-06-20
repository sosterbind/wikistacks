const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">
    
  <div class="form-group">
    <label for="author" class="col-sm-2 control-label">Author Name</label>
    <div class="col-sm-10">
    <input id="author" name="author" type="text" class="form-control"/>
    </div>
  </div>  
    
  <div class="form-group">
    <label for="email" class="col-sm-2 control-label">Author Email</label>
    <div class="col-sm-10">
    <input id="email" name="email" type="text" class="form-control"/>
    </div>
  </div>
    
    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <div class="form-group">
      <label for="post" class="col-sm-2 control-label">Content</label>
      <div class="col-sm-10">
        <textarea rows='4' cols='50' id="post" name="post" type="text" class="form-control"></textarea>
        
        
      </div>
    </div>
    
    <div class="col-sm-offset-2 col-sm-10">
      <button type="open" class="btn btn-primary">open</button>
      <button type="closed" class="btn btn-primary">closed</button>
    </div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>
  
  </form>
`);