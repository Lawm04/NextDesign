import React from 'react'

export default function Button(props) {
    const {text, full} = props
  return (
    <button className={'rounded-full overflow-hidden duration-200 hover:opacity-60  border-2 border-indigo-600 ' +
     (dark ? 'text-white bg-indigo-600 border-indigo-600':'text-black-600 ' ) + 
     (full ? 'grid place-items-center w-full': ' ')
     }>
        <p className={'px-6 sm:px-10 whitespace-nowrap py-2 sm:py-3 '}>{text}</p>
    </button>  )
}
