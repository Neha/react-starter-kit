var React = require('react');
var ListItem = require('./ListItem.jsx');

var fruits = [{"id" : "1", "name" : "Apple"},{"id" : "2", "name" : "Ornage"},{"id" : "3", "name" : "Grapes"}];

var List = React.createClass({ 

	render : function(){

		var listItems = fruits.map(function(item){
			return <ListItem key={item.id} fruit = {item.name} />;
		});

		return(
				<ul>
					{listItems}
				</ul>	

			)
	}
});


module.exports = List;