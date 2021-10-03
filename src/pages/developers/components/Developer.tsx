import React from 'react'

import { DeveloperData } from '../../../models/trending'

const Developer = ({
  avatar,
  name,
  popularRepository,
  rank,
  url,
  username,
}: DeveloperData) => {
  return (
    <article className='Box-row d-flex' id='pa-nunomaduro'>
      <a style={{width: '16px'}} href={url} className='color-text-secondary f6'>{rank}</a>
      <div className='mx-3'>
        <a href={url}>
          <img className='rounded avatar-user' src={avatar} width='48' height='48' alt={`@${username}`} />
        </a>
      </div>
      <div className='d-flex flex-auto'>
        <div className='col-8 d-flex'>
          <div className='col-6'>
            <h1 className='h3 lh-condensed'>
              <a href={url}>{name}</a>
            </h1>
            <p className='f4 text-normal mb-1'>
              <a href={url} className='Link--secondary'>{username}</a>
            </p>
          </div>
          <div className='col-6'>
            <div className='my-0'>
              <article>
                <div className='f6 color-text-secondary text-uppercase mb-1'>
                  <svg
                    aria-hidden='true'
                    height='16'
                    viewBox='0 0 16 16'
                    version='1.1'
                    width='16'
                    className='octicon octicon-flame color-text-orange-light mr-1'
                  >
                    <path
                      fillRule='evenodd'
                      d='M7.998 14.5c2.832 0 5-1.98 5-4.5 0-1.463-.68-2.19-1.879-3.383l-.036-.037c-1.013-1.008-2.3-2.29-2.834-4.434-.322.256-.63.579-.864.953-.432.696-.621 1.58-.046 2.73.473.947.67 2.284-.278 3.232-.61.61-1.545.84-2.403.633a2.788 2.788 0 01-1.436-.874A3.21 3.21 0 003 10c0 2.53 2.164 4.5 4.998 4.5zM9.533.753C9.496.34 9.16.009 8.77.146 7.035.75 4.34 3.187 5.997 6.5c.344.689.285 1.218.003 1.5-.419.419-1.54.487-2.04-.832-.173-.454-.659-.762-1.035-.454C2.036 7.44 1.5 8.702 1.5 10c0 3.512 2.998 6 6.498 6s6.5-2.5 6.5-6c0-2.137-1.128-3.26-2.312-4.438-1.19-1.184-2.436-2.425-2.653-4.81z'
                    />
                  </svg>Popular repo
                </div>
                <h1 className='h4 lh-condensed'>
                  <a
                    style={{maxWidth: '175px'}}
                    href={popularRepository.url}
                    className='css-truncate css-truncate-target'
                  >
                    <svg
                      aria-hidden='true'
                      height='16'
                      viewBox='0 0 16 16'
                      version='1.1'
                      width='16'
                      data-view-component='true'
                      className='octicon octicon-repo color-icon-secondary mr-1'
                    >
                      <path
                        fillRule='evenodd'
                        d='M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z'
                      />
                    </svg>{popularRepository.repositoryName}
                  </a>
                </h1>
                <div className='f6 color-text-secondary mt-1'>{popularRepository.description}</div>
              </article>
            </div>
          </div>
        </div>
        <div className='col-4 d-flex flex-justify-end ml-3'>
          <div className='user-profile-following-container'>
            <div className='user-following-container'>
              <span className='user-following-container'>
                <span className='follow d-block'>
                  <a className='btn btn-sm btn-block' href={url}>Follow</a>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Developer
