import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipTrigger,
  TooltipProvider,
  TooltipContent,
} from "@/components/ui/tooltip";

const ExperienceCards = ({ item }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <li className="bg-[#232329] h-[184px] px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_12px_4px_rgba(255,26,26,1)]">
          <span className="text-accent">{item.duration}</span>
          <h3 className="text-xl max-w-[260px] min-h-[60px]">
            {item.position}
          </h3>
          <div className="flex items-center gap-3">
            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
            <p className="text-white/60">{item.company}</p>
          </div>
        </li>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-4xl font-bold mb-4">
            {item.position}
          </DialogTitle>
          <DialogDescription className="flex flex-col gap-[30px] text-center xl:text-left ">
            <p className=" text-white/60 mx-auto xl:mx-0">
              {item.projectDescription}
            </p>
            <div className="flex items-center justify-center">
              <ul className="flex flex-row  gap-[30px]  w-auto">
                {item.skills.map((skill, i) => {
                  return (
                    <li key={i}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[80px] h-[80px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl text-white group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  );
                })}
              </ul>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ExperienceCards;
