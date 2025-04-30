import UserProfileStatic from "../assets/icons/userProfileStatic.png"
export default function ProfileImageLeft() {
  return (
    <div className="profile-image-div justify-items-stret -mr-24 mb-3 relative w-fit h-fit group">
      <div
        className="w-10 h-10 bg-contain bg-no-repeat relative"
        style={{ backgroundImage: `url('${UserProfileStatic}')` }}
      />
    </div>
  );
}