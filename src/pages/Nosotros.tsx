import { LocalUbication } from '../components/LocalUbication';
import { Nav } from '../components/Nav'
import { ParticipationEvents } from '../components/ParticipationEvents';
import { PersonalInfo } from '../components/PersonalInfo';

export const Nosotros = () => {
  return (
    <>
      <Nav/>
      <div className='flex flex-wrap w-full mt-20'>
        <PersonalInfo/>
        <ParticipationEvents/>
        <LocalUbication/>
      </div>
    </>
  )
}

