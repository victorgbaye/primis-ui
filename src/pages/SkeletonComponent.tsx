import Skeleton from "../components/Skeleton"

const SkeletonComponent = () => {
  return (
    <div>
      <Skeleton variant="text" width="700px" height="20px" animation />
      <Skeleton variant="text" width="350px" height="20px" animation />
      <Skeleton variant="text" width="350px" height="20px" animation />
      <Skeleton variant="circle" width="100px" height="100px" animation/>
      <Skeleton variant="rect" width="700px" height="200px" animation={true} />
    </div>
  )
}

export default SkeletonComponent