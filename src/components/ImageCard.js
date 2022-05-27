import React from 'react'

const ImageCard = ({ image }) => {
    const tags = image.tags.split(',');

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-l mb-2">
          {image.name}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Dowloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
          <span className='font-bold text-red-600'>DESIGN BY ANJI</span>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #{tag}
            </span>
            ))}
      </div>
    </div>
  )
}

export default ImageCard;