var RowsDescription = require('./RowsDescription')
var ColsDescription = require('./ColsDescription')
var HightlightMixin = require('../assets/js/highlightMixin');

module.exports = React.createClass({

  mixins : [HightlightMixin],

  render : function(){
    return(
      <div>
      <h3 id="js-basic-example">{this.props.title}</h3>
      <p>The most basic implementation of ReactDataGrid requires 4 properties; an array of columns, a rowGetter function to retrive a row for a given index, the number of rows the grid expects and the minimum height of the grid.</p>

      <ColsDescription/>
      <RowsDescription/>

      <p>Now simply invoke React.render(..) passing the array of rows and columns as props</p>
      <div className="code-block js">
      <pre><code className="javascript">{"React.render(<ReactDataGrid columns={columns} rowGetter={rowGetter} rowsCount={rowsCount()} minHeight={500} />, document.getElementById('example'))"}</code></pre>
      </div>
      </div>
    );
  }
});
