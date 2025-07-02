export function AnimalInputsSkeleton() {
  const cardClass = "bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700";
  const cardBodyClass = "p-5";
  const skeletonClass = "skeleton bg-gray-200 dark:bg-gray-700 animate-pulse";

  return (
    <div className="min-h-screen flex items-start justify-center">
      <div className="w-full max-w-7xl">
        <section className="space-y-6">
          {/* Header Skeleton */}
          <div className={cardClass}>
            <div className={`${cardBodyClass} flex justify-between items-center`}>
              <div>
                <div className={`h-6 w-48 mb-2 ${skeletonClass}`}></div>
                <div className={`h-4 w-32 ${skeletonClass}`}></div>
              </div>
              <div className="flex gap-3">
                <div className={`h-10 w-24 ${skeletonClass}`}></div>
                <div className={`h-10 w-32 ${skeletonClass}`}></div>
              </div>
            </div>
          </div>

          {/* Animal Identification Skeleton */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className={`lg:col-span-2 ${cardClass}`}>
              <div className={cardBodyClass}>
                <div className={`h-6 w-48 mb-4 ${skeletonClass}`}></div>
                <div className="space-y-4">
                  <div className={`h-10 ${skeletonClass}`}></div>
                  <div className={`h-10 ${skeletonClass}`}></div>
                </div>
              </div>
            </div>

            {/* Conception Skeleton */}
            <div className={cardClass}>
              <div className={cardBodyClass}>
                <div className={`h-6 w-48 mb-4 ${skeletonClass}`}></div>
                <div className={`h-10 ${skeletonClass}`}></div>
              </div>
            </div>
          </div>

          {/* Group Comments Skeleton */}
          <div className={cardClass}>
            <div className={cardBodyClass}>
              <div className={`h-6 w-48 mb-4 ${skeletonClass}`}></div>
              <div className={`h-10 ${skeletonClass}`}></div>
            </div>
          </div>

          {/* Animal Traits Skeleton */}
          <div className={cardClass}>
            <div className={cardBodyClass}>
              <div className={`h-6 w-48 mb-4 ${skeletonClass}`}></div>
              <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`h-10 ${skeletonClass}`}></div>
                ))}
              </div>
            </div>
          </div>

          {/* Danger Zone Skeleton */}
          <div className={cardClass}>
            <div className={`${cardBodyClass} border-t border-gray-200 dark:border-gray-700`}>
              <div className="pt-2">
                <div className={`h-6 w-48 mb-4 ${skeletonClass}`}></div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                  <div>
                    <div className={`h-4 w-64 mb-2 ${skeletonClass}`}></div>
                    <div className={`h-4 w-48 ${skeletonClass}`}></div>
                  </div>
                  <div className={`h-10 w-32 mt-4 sm:mt-0 ${skeletonClass}`}></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}