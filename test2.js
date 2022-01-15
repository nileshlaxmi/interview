// class TestComponent extends Component{
// 	constructor(){
// 		super()
// 		this.state = {
// 			value: []
// 		}
// 	}

// 	static getDerivedStateFromProps(){}

// 	componentDidMount(){
// 		this.serviceCall()

// 	}

// 	serviceCall = () => {
// 		this.props.getList().then(resp => {
// 			if(resp){
// 				this.setState({
// 					value: resp.result
// 				})
// 			}
// 		}).catch(err=> console.error(err))
// 	}

// 	componentDidUpdate(){}

// 	componentWillUnmount(){}

// 	render(){
// 		const {value} = this.props;
// 		return <div>{value.map(item => <li>item</li>)}</div>
// 	}
// }

// const obj={
// 	name: 'Deepak',
// 	address: {
// 		locality: 'BTM',
// 		city: 'Banglore'
// 	}
// }

// (function()
// {
// var a= b = 42;
// })();
// console.log(typeof a); // undefined
// console.log(typeof b); // Number
// console.log(b); // 42

// log the output as  -> "contents":"sleep well"
const labels = {
	EN: {
		contents: "sleep well",
	},
	TH: {
		contents: "thai content",
	},
};

// let language = "EN";

const showOutput = (lang) => {
	return labels[lang];
};

console.log(showOutput("TH"));

function outerFn() {
	const a = 1;
	function innerFn() {
		console.log(a);
		const b = 2;
		console.log(b);
	}

	innerFn();
}

outerFn();
