import { Avatar } from '@mui/material';

function About() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-5xl font-bold mb-4">GitHub Finder</h1>

      <p className="mb-4 text-xl font-light">
        A React app to search GitHub profiles and view details. This project is inspired by the{' '}
        <a href="https://www.udemy.com/course/modern-react-front-to-back/" className="text-blue-500 underline" target="_blank" rel="noreferrer">
          React Front To Back
        </a>{' '}
        course by
        <strong>
          <a href="https://traversymedia.com" className="text-blue-500 underline" target="_blank" rel="noreferrer">
            {' '}Brad Traversy
          </a>
        </strong>.
      </p>

      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Layout By:{' '}
        <a className="text-white underline" href="https://twitter.com/hassibmoddasser" target="_blank" rel="noreferrer">
          Hassib Moddasser
        </a>
      </p>

      <div className="mt-8 flex flex-col items-center">
        <Avatar
          src="https://avatars.githubusercontent.com/your-github-username"
          alt="Your GitHub Avatar"
          sx={{ width: 120, height: 120 }}
        />
        <h2 className="text-2xl font-semibold mt-4">Attiqa Zaki</h2>
        <p className="text-gray-400">@Attiqa-Z</p>
        <p className="text-sm mt-2 max-w-xl">
          I'm a passionate frontend developer and Computer Science student. I love working with React, learning new technologies,
          and building beautiful user interfaces.
        </p>
        <a
          href="https://github.com/Attiqa-Z"
          className="mt-4 inline-block text-blue-500 underline"
          target="_blank"
          rel="noreferrer"
        >
          Visit my GitHub Profile
        </a>
      </div>
    </div>
  );
}

export default About;
