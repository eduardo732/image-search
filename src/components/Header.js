import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import "./Header.css";

const Header = () => {
	const [photos, setPhotos] = useState([]);
	console.log(photos);
	return(
		<header>
			<Formik
				initialValues={{ search: ''} }
				onSubmit={async values => {
					//llamar api
					const response = await fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`, {
						headers: {
							'Authorization': 'Client-ID ic16q2hU7VnmDx8x7hrWMpMIG4Q7jh0lDOzXystyuVc'
						}
					})
					const data = await response.json();
					setPhotos(data.results);
				}}
				>
				<Form>
					<Field name="search" />
				</Form>
			</Formik>

		</header>
	)
}

export default Header;
