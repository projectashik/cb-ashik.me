const defaultClass = "w-10 h-10"
export const icons: {
  [key: string]: any
} = {
  typescript: (
    <svg viewBox="0 0 128 128" aria-hidden="true" className={defaultClass}>
      <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path>
      <path
        data-name="original"
        fill="#007acc"
        d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
      ></path>
    </svg>
  ),
  nextjs: (
    <svg viewBox="0 0 128 128" aria-hidden="true" className={defaultClass}>
      <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"></path>
    </svg>
  ),
  tailwindcss: ( 
    <svg viewBox="0 0 128 128" aria-hidden="true" className={defaultClass}>
<path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0" fill="#38b2ac"></path>
</svg>

  ),
  netlify: (
    <svg aria-hidden="true" className={defaultClass} viewBox="0 0 256 256"><defs><radialGradient id="svgIDa" cx="50%" cy="-50%" r="100%" fx="50%" fy="-50%"><stop offset="0%" stopColor="#20C6B7"/><stop offset="100%" stopColor="#4D9ABF"/></radialGradient></defs><path fill="url(#svgIDa)" d="m185.532 88.839l-.094-.04a.396.396 0 0 1-.154-.087a.734.734 0 0 1-.187-.621l5.167-31.553l24.229 24.209l-25.198 10.709a.555.555 0 0 1-.22.04h-.101a.694.694 0 0 1-.134-.114a11.468 11.468 0 0 0-3.308-2.543Zm35.144-1.923l25.906 25.878c5.38 5.381 8.075 8.065 9.057 11.177c.147.46.267.921.361 1.395l-61.913-26.192a4.868 4.868 0 0 0-.1-.04c-.248-.1-.535-.214-.535-.467c0-.254.294-.374.541-.474l.08-.034l26.603-11.243Zm34.268 46.756c-1.337 2.51-3.944 5.114-8.355 9.527l-29.209 29.17l-37.777-7.858l-.2-.04c-.335-.054-.689-.114-.689-.414a11.387 11.387 0 0 0-4.378-7.965c-.154-.154-.113-.394-.067-.615c0-.033 0-.066.014-.093l7.105-43.571l.026-.147c.04-.334.1-.721.401-.721a11.566 11.566 0 0 0 7.754-4.44c.06-.067.1-.14.18-.18c.214-.1.468 0 .689.093l64.5 27.254h.006Zm-44.28 45.407l-48.031 47.978l8.22-50.475l.014-.067a.905.905 0 0 1 .04-.193c.067-.16.24-.227.408-.294l.08-.034c1.8-.767 3.392-1.95 4.646-3.451c.16-.187.354-.368.601-.401c.064-.01.13-.01.194 0l33.82 6.944l.007-.007Zm-58.198 58.133l-5.414 5.408l-59.854-86.408a2.831 2.831 0 0 0-.067-.094c-.093-.127-.194-.253-.173-.4c.006-.107.073-.2.147-.28l.066-.087c.18-.268.335-.535.502-.822l.133-.233l.02-.02c.094-.16.18-.314.341-.401c.14-.067.335-.04.488-.007l66.311 13.66c.186.03.36.105.508.22c.087.088.107.181.127.288a11.735 11.735 0 0 0 6.871 7.845c.187.093.107.3.02.52a1.588 1.588 0 0 0-.1.301c-.835 5.074-8 48.726-9.926 60.51Zm-11.309 11.29c-3.99 3.946-6.343 6.035-9.003 6.877a13.382 13.382 0 0 1-8.06 0c-3.115-.989-5.809-3.672-11.19-9.054l-60.108-60.042l15.7-24.323a1 1 0 0 1 .268-.314c.167-.12.408-.066.608 0a16.285 16.285 0 0 0 10.948-.554c.18-.066.361-.113.502.014c.07.064.133.135.187.213l60.148 87.19v-.007Zm-94.156-68.008l-13.789-13.773l27.23-11.604a.562.562 0 0 1 .221-.047c.227 0 .361.227.481.434c.274.42.564.83.87 1.229l.086.106c.08.114.027.227-.053.334l-15.04 23.321h-.006ZM27.11 160.625L9.665 143.199c-2.968-2.964-5.12-5.114-6.617-6.963l53.043 10.99l.2.033c.328.053.69.113.69.42c0 .334-.395.488-.73.614l-.153.067l-28.988 12.265ZM0 127.275a13.34 13.34 0 0 1 .602-3.304c.989-3.112 3.676-5.796 9.063-11.177l22.324-22.3a14524.43 14524.43 0 0 0 30.92 44.647c.18.24.38.507.174.707c-.976 1.075-1.952 2.25-2.64 3.526c-.075.163-.19.306-.335.413c-.087.054-.18.034-.28.014h-.014L0 127.269v.007Zm37.965-42.75l30.017-29.984c2.82 1.235 13.087 5.568 22.27 9.44c6.952 2.939 13.288 5.61 15.28 6.477c.2.08.381.16.468.36c.053.12.027.274 0 .401a13.363 13.363 0 0 0 3.496 12.205c.2.2 0 .487-.174.734l-.094.14l-30.478 47.157c-.08.134-.154.247-.288.334c-.16.1-.387.053-.575.007a15.215 15.215 0 0 0-3.629-.494c-1.096 0-2.286.2-3.489.42h-.007c-.133.02-.254.047-.36-.033a1.403 1.403 0 0 1-.301-.34L37.965 84.525Zm36.08-36.04l38.86-38.817c5.38-5.375 8.074-8.065 11.188-9.047a13.382 13.382 0 0 1 8.061 0c3.115.982 5.808 3.672 11.189 9.047l8.422 8.413l-27.638 42.756a1.035 1.035 0 0 1-.274.32c-.167.114-.401.067-.602 0a14.028 14.028 0 0 0-12.833 2.471c-.18.187-.448.08-.675-.02c-3.61-1.569-31.682-13.42-35.699-15.122Zm83.588-24.542l25.52 25.49l-6.15 38.044v.1a.9.9 0 0 1-.053.254c-.067.133-.201.16-.335.2a12.237 12.237 0 0 0-3.662 1.823a1.029 1.029 0 0 0-.134.113c-.074.08-.147.154-.267.167a.763.763 0 0 1-.288-.047l-38.887-16.504l-.073-.034c-.248-.1-.542-.22-.542-.474a14.664 14.664 0 0 0-2.072-6.109c-.187-.307-.394-.627-.234-.941l27.177-42.082ZM131.352 81.4l36.454 15.423c.2.093.421.18.508.387a.707.707 0 0 1 0 .38c-.107.535-.2 1.142-.2 1.757v1.021c0 .254-.261.36-.502.46l-.073.027c-5.775 2.464-81.076 34.538-81.19 34.538c-.113 0-.234 0-.347-.113c-.2-.2 0-.48.18-.735l.094-.133l29.957-46.335l.053-.08c.174-.281.375-.595.696-.595l.3.047c.682.093 1.284.18 1.892.18c4.545 0 8.756-2.21 11.296-5.989c.06-.1.137-.19.227-.267c.18-.133.448-.066.655.027Zm-41.748 61.324l82.079-34.965s.12 0 .234.114c.447.447.828.747 1.196 1.028l.18.113c.168.094.335.2.348.374c0 .067 0 .107-.013.167l-7.032 43.144l-.027.174c-.046.333-.093.714-.407.714a11.558 11.558 0 0 0-9.177 5.655l-.034.053c-.093.154-.18.3-.334.38c-.14.068-.32.041-.468.008l-65.455-13.487c-.067-.013-1.016-3.465-1.09-3.472Z"/></svg>
  ),
  prisma: (
    <svg className={defaultClass} aria-hidden="true" viewBox="0 0 256 310"><path d="M254.313 235.519L148 9.749A17.063 17.063 0 0 0 133.473.037a16.87 16.87 0 0 0-15.533 8.052L2.633 194.848a17.465 17.465 0 0 0 .193 18.747L59.2 300.896a18.13 18.13 0 0 0 20.363 7.489l163.599-48.392a17.929 17.929 0 0 0 11.26-9.722a17.542 17.542 0 0 0-.101-14.76l-.008.008Zm-23.802 9.683l-138.823 41.05c-4.235 1.26-8.3-2.411-7.419-6.685l49.598-237.484c.927-4.443 7.063-5.147 9.003-1.035l91.814 194.973a6.63 6.63 0 0 1-4.18 9.18h.007Z"/></svg>
  ),
  vercel: (
    <svg className={defaultClass} aria-hidden="true" viewBox="0 0 256 222"><path d="m128 0l128 221.705H0z"/></svg>
  ),
  supabase: (
    <svg className={defaultClass} aria-hidden="true" viewBox="0 0 256 263"><defs><linearGradient id="svgIDa" x1="20.862%" x2="63.426%" y1="20.687%" y2="44.071%"><stop offset="0%" stopColor="#249361"/><stop offset="100%" stopColor="#3ECF8E"/></linearGradient><linearGradient id="svgIDb" x1="1.991%" x2="21.403%" y1="-13.158%" y2="34.708%"><stop offset="0%"/><stop offset="100%" stopOpacity="0"/></linearGradient></defs><path fill="url(#svgIDa)" d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292l-101.37 127.669Z"/><path fill="url(#svgIDb)" fillOpacity=".2" d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292l-101.37 127.669Z"/><path fill="#3ECF8E" d="M106.399 4.37c6.717-8.461 20.338-3.826 20.5 6.976l1.037 157.984H23.037c-19.241 0-29.973-22.223-18.008-37.292L106.4 4.369Z"/></svg>
  ),
  hasura: (
    <svg className={defaultClass} aria-hidden="true" viewBox="0 0 256 259"><path fill="#1EB4D4" d="M233.5 2.057c1.607-2.47 5.207-2.79 7.142-.552c14.531 16.794 19.199 61.836 12.075 85.335l-.349 1.103c-2.53 7.701-3.244 15.84-1.785 23.745l.591 3.215l.57 3.325c1.014 6.156 1.813 12.542 1.813 17.38c0 67.721-56.216 122.652-125.587 122.652c-69.341 0-125.588-54.902-125.588-122.652c0-5.278.952-12.398 2.095-19.052l.584-3.278c.099-.536.198-1.067.297-1.59c1.4-7.44.876-15.087-1.299-22.382l-.427-1.363C-3.987 64.807.596 18.595 15.357 1.505c1.833-2.093 5.161-1.942 6.873.18l.27.372L40.683 29.93c4.524 5.551 12.619 6.859 18.69 2.964c19.73-12.614 43.3-19.938 68.627-19.938c25.326 0 48.895 7.324 68.626 19.938c5.899 3.765 13.66 2.696 18.23-2.42l.461-.544L233.5 2.057ZM128 40.974c-14.88 0-28.987 3.255-41.575 9.127c-31.397 14.532-53.598 45.02-55.533 80.711a95.734 95.734 0 0 0-.148 5.087c0 52.374 43.598 94.983 97.226 94.983s97.256-42.609 97.286-94.954c0-1.686-.06-3.4-.149-5.086c-1.935-35.663-24.135-66.18-55.532-80.713c-12.619-5.9-26.695-9.155-41.575-9.155Zm-6.46 52.984c.86 0 1.674.378 2.203 1.038l.209.3l21.308 35.08l24.85 42.086a2.593 2.593 0 0 1 0 2.703c-.417.738-1.176 1.23-2.037 1.342l-.374.024h-20.207c-.86 0-1.673-.4-2.202-1.065l-.209-.301l-13.273-22.468l-14.79 22.554a2.765 2.765 0 0 1-1.998 1.23l-.354.02H94.161c-1.041 0-1.994-.552-2.47-1.424a2.696 2.696 0 0 1-.068-2.463l.187-.326l27.35-40.75l-20.386-33.453c-.506-.843-.535-1.889-.03-2.732a2.792 2.792 0 0 1 2.066-1.37l.375-.025h20.356Z"></path></svg>
  ),
  auth0: (
    <svg className={defaultClass} aria-hidden="true" viewBox="0 0 256 285"><path d="M220.412 0h-92.415l28.562 89.006h92.416l-74.77 53.077l28.57 89.511c48.128-35.06 63.854-88.12 46.208-142.588L220.413 0ZM7.018 89.006h92.416L127.997 0H35.589L7.019 89.006c-17.655 54.468-1.92 107.529 46.207 142.588l28.563-89.51l-74.77-53.078Zm46.208 142.588l74.77 52.97l74.77-52.97l-74.77-53.847l-74.77 53.847Z"></path></svg>
  )
}

const Icon = ({ name }: { name: string }) => {
  return <>{icons[name]}</>
}
export default Icon