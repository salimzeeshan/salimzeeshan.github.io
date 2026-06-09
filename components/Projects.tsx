"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  type SyntheticEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { projects } from "@/data/projects";
import { GithubIcon, ExternalIcon } from "@/components/icons";
import { SectionHeader } from "@/components/SectionHeader";

const videoExtensions = [".mp4", ".webm", ".ogg", ".mov", ".m4v"];

function isVideoMedia(src: string) {
  const normalizedSrc = src.toLowerCase().split("?")[0];

  return videoExtensions.some((extension) => normalizedSrc.endsWith(extension));
}

function hasUrl(url?: string) {
  return Boolean(url?.trim());
}

function getVideoPoster(src: string) {
  const filename = src.split("/").pop()?.replace(/\.[^.]+$/, "");

  return filename ? `/projects/posters/${filename}.jpg` : undefined;
}

function ProjectVideo({ src, title }: { src: string; title: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPortrait, setIsPortrait] = useState(false);
  const shouldLoad = useInView(videoRef, { once: true, margin: "300px" });
  const isVisible = useInView(videoRef, { margin: "0px" });
  const poster = getVideoPoster(src);

  function handleLoadedMetadata(event: SyntheticEvent<HTMLVideoElement>) {
    const video = event.currentTarget;

    setIsPortrait(video.videoHeight > video.videoWidth);
  }

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !shouldLoad) {
      return;
    }

    if (isVisible) {
      void video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }, [isVisible, shouldLoad]);

  return (
    <video
      ref={videoRef}
      className={`aspect-[5/3] w-full ${
        isPortrait
          ? "bg-zinc-100 object-contain dark:bg-zinc-900"
          : "object-cover transition-transform duration-500 group-hover:scale-105"
      }`}
      src={shouldLoad ? src : undefined}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload={shouldLoad ? "metadata" : "none"}
      aria-label={`${title} project preview video`}
      onLoadedMetadata={handleLoadedMetadata}
    />
  );
}

export function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const [activeTag, setActiveTag] = useState("All");

  const tags = useMemo(() => {
    const allTags = projects.flatMap((project) => project.techStack);
    return ["All", ...Array.from(new Set(allTags)).sort()];
  }, []);

  const filteredProjects =
    activeTag === "All"
      ? projects
      : projects.filter((project) => project.techStack.includes(activeTag));

  return (
    <section
      id="projects"
      ref={ref}
      className="bg-white/70 dark:bg-zinc-950/40"
    >
      <div className="section-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            kicker="Projects"
            title="Selected frontend builds."
            body="A focused set of product interfaces, dashboards, and component-driven experiments."
          />
        </div>
        <div className="mb-10 flex max-w-full gap-2 overflow-x-auto pb-2">
          {tags.map((tag) => (
            <button
              type="button"
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                activeTag === tag
                  ? "border-accent bg-accent text-white"
                  : "border-zinc-200 bg-white text-zinc-700 hover:border-accent hover:text-accent dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project, index) => {
            const hasGithubUrl = hasUrl(project.githubUrl);
            const hasLiveUrl = hasUrl(project.liveUrl);

            return (
              <motion.article
                layout
                key={project.title}
                className="group overflow-hidden rounded-lg border border-zinc-200 bg-canvas-light shadow-sm transition-shadow hover:shadow-lift dark:border-zinc-800 dark:bg-canvas-dark"
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : undefined}
                whileHover={{ y: -6 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.08,
                }}
              >
                <div className="overflow-hidden border-b border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
                  {isVideoMedia(project.image) ? (
                    <ProjectVideo src={project.image} title={project.title} />
                  ) : (
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      width={900}
                      height={540}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      quality={90}
                      className="aspect-[5/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-zinc-50">
                      {project.title}
                    </h3>
                    {hasGithubUrl || hasLiveUrl ? (
                      <div className="flex gap-2">
                        {hasGithubUrl ? (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="grid h-9 w-9 place-items-center rounded-lg border border-zinc-200 text-zinc-600 transition-colors hover:border-accent hover:bg-accent hover:text-white dark:border-zinc-800 dark:text-zinc-300"
                            aria-label={`${project.title} GitHub repository`}
                          >
                            <GithubIcon className="h-4 w-4" />
                          </a>
                        ) : null}
                        {hasLiveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="grid h-9 w-9 place-items-center rounded-lg border border-zinc-200 text-zinc-600 transition-colors hover:border-accent hover:bg-accent hover:text-white dark:border-zinc-800 dark:text-zinc-300"
                            aria-label={`${project.title} live site`}
                          >
                            <ExternalIcon className="h-4 w-4" />
                          </a>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                  <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-ink dark:bg-accent/15 dark:text-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
