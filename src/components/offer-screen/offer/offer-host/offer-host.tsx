import { THost } from '../../../../types/offer.ts';

type OfferHostProps = {
  isAvatarPro: string;
  host: THost;
  description: string;
};

function OfferHost({
  isAvatarPro,
  host,
  description,
}: OfferHostProps): JSX.Element | null {
  if (!host) {
    return null;
  }

  return (
    <div className="offer__host">
      <h2 className="offer__host-title">Meet the host</h2>
      <div className="offer__host-user user">
        <div
          className={`offer__avatar-wrapper ${
            isAvatarPro ? 'offer__avatar-wrapper--pro' : ''
          } user__avatar-wrapper`}
        >
          <img
            className="offer__avatar user__avatar"
            src={host.avatarUrl}
            width="74"
            height="74"
            alt="Host avatar"
          />
        </div>
        <span className="offer__user-name">{host.name}</span>
        {host.isPro && <span className="offer__user-status">Pro</span>}
      </div>
      <div className="offer__description">
        <p className="offer__text">{description}</p>
      </div>
    </div>
  );
}

export default OfferHost;
