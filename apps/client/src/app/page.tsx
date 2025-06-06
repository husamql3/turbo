"use client"

import { type ChangeEvent, type FormEvent, useEffect, useState } from "react"

const API_HOST = process.env.NEXT_PUBLIC_API_HOST || "http://localhost:3001"

export default function client() {
	const [name, setName] = useState<string>("")
	const [response, setResponse] = useState<{ message: string } | null>(null)
	const [error, setError] = useState<string | undefined>()

	useEffect(() => {
		setResponse(null)
		setError(undefined)
	}, [])

	const onChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		try {
			const result = await fetch(`${API_HOST}/message/${name}`)
			const response = await result.json()
			setResponse(response)
		} catch (err) {
			console.error(err)
			setError("Unable to fetch response")
		}
	}

	return (
		<div>
			<h1>client</h1>
			<form onSubmit={onSubmit}>
				<label htmlFor="name">Name </label>
				<input
					type="text"
					name="name"
					id="name"
					value={name}
					onChange={onChange}
				/>
			</form>
			{error && (
				<div>
					<h3>Error</h3>
					<p>{error}</p>
				</div>
			)}
			{response && (
				<div>
					<h3>Greeting</h3>
					<p>{response.message}</p>
				</div>
			)}
		</div>
	)
}
