var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients = [{"id" : "1", "name" : "Apple"},{"id" : "2", "name" : "Ornage"},{"id" : "3", "name" : "Grapes"}];

var List = React.createClass({ 

	render : function(){

		var listItems = ingredients.map(function(item){
			return <ListItem key={item.id} ingredient = {item.name} />;
		});

		return(
				<ul>
					{listItems}
				</ul>	

			)
	}
});


module.exports = List;