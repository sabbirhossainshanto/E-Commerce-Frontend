import nexiosInstance from "@/src/lib/NexiosInstance";
import { IResponse, IReview } from "@/src/types";
import { NexiosResponse } from "nexios-http/types/interfaces";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const SingleProductReview = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const { data }: NexiosResponse<IResponse<IReview[]>> =
    await nexiosInstance.get(`/reviews/${params.productId}`);

  return (
    <div className="col-span-12 lg:col-span-9">
      {data?.data && data?.data?.length > 0 ? (
        data?.data?.map((review) => {
          return (
            <div
              key={review?.id}
              className="md:flex justify-between items-center border rounded p-5 mt-2"
            >
              <div className="w-20 h-20">
                {review?.user?.profilePhoto && (
                  <Image
                    height={100}
                    width={100}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    src={review?.user?.profilePhoto}
                    alt="product"
                  />
                )}
              </div>
              <div className="mt-6 md:mt-0">
                <h5>Name : {review?.user?.name}</h5>
                <h5 className="flex items-center gap-1">
                  <span>Rating :</span>
                  {Array(review?.rating)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar className="text-yellow-500" key={i} />
                    ))}
                </h5>

                <p className="mb-0">
                  Comment : <span className="">{review?.comment}</span>
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <div className="flex items-center justify-center min-h-[40vh]">
          No review available in this product!
        </div>
      )}
    </div>
  );
};

export default SingleProductReview;
