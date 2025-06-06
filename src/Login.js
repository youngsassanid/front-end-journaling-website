import React from 'react';
import "./styles.css";

export const Login = () => {
	const [showPassword, setShowPassword] = React.useState(false);
	const [username, setUsername] = React.useState("");
	const [password, setPassword] = React.useState("");

	const validateInputs = () => {
		const usernameIsValid = username.length >= 4;
		const passwordIsValid = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password);

		if (!usernameIsValid) {
			alert("Username must be at least 4 characters long.");
			return false;
		}

		if (!passwordIsValid) {
			alert("Password must be at least 8 characters long, contain at least one capital letter, and one special character.");
			return false;
		}

		return true;
	};

	const handleCreateAccount = () => {
		if (!username || !password) {
			alert("Please fill out all fields.");
			return;
		}

		if (!validateInputs()) return;

		const user = { username, password };
		localStorage.setItem("user", JSON.stringify(user));
		alert("Your account has been successfully created!");
	};

	const handleLogin = () => {
		const currentUser = JSON.parse(localStorage.getItem("user"));
		if (!currentUser || currentUser.password !== password || currentUser.username !== username) {
			alert("Invalid username or password. Please try again.");
			return;
		}

		alert("You've successfully logged in!");
		window.location.reload();
	};

	return (
		<div className="login-container">
			<div className="login-form">
				<div className="login-row">
					<label>Username</label>
					<input
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div className="login-row">
					<label>Password</label>
					<input
						type={showPassword ? "text" : "password"}
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className="login-row">
					<input
						type="checkbox"
						id="togglePass"
						onChange={() => setShowPassword(!showPassword)}
					/>
					<label htmlFor="togglePass">Show Password</label>
				</div>
				<div className="login-row">
					<button onClick={handleLogin}>Log in</button>
					<button onClick={handleCreateAccount}>Create account</button>
				</div>
			</div>
		</div>
	);
};
