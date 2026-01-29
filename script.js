//your JS code here. If required.
const byteSize = (str) => {
	const blob = new Blob({[str]});
	const sizeInBytes = blob.size;

	return sizeInBytes;
};

const str = prompt("Enter some string.")
alert(byteSize(str));