import { TUser } from '../../../../types/comment.ts';

type ReviewsAvatarProps = {
  user: TUser;
};

function ReviewsAvatar({ user }: ReviewsAvatarProps): JSX.Element {
  return (
    <div className="reviews__avatar-wrapper user__avatar-wrapper ">
      <img
        className="reviews__avatar user__avatar"
        src={user.avatarUrl}
        width="54"
        height="54"
        alt="Reviews avatar"
      />
    </div>
  );
}

export default ReviewsAvatar;
