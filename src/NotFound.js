import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
<div className="container p-2 text-center">
<h2 className="mt-3">This page was not found</h2>
<Link to="/">Return to Home Page</Link>
</div>
);
export default NotFound;