import React, { useState, useRef } from "react";
import { cn } from "../../_utils";
import { FileInputProps } from "./types";
import { IconUpload, IconFile, IconX } from "@tabler/icons-react";

export const FileInput = ({
  label,
  hint,
  required,
  leftSection,
  rightSection,
  className,
  disabled,
  error,
  classNames,
  id,
  accept,
  multiple = false,
  maxSize,
  minSize,
  value,
  onChange,
  placeholder = "Select file",
  dragAndDrop = false,
  showFilePreview = true,
  clearable = true,
  fileIcon,
  ...props
}: FileInputProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const inputId =
    id || label
      ? `file-input-${label?.replace(/\s+/g, "-").toLowerCase()}`
      : undefined;

  const files = Array.isArray(value) ? value : value ? [value] : [];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = e.target.files;
    if (!newFiles) return;

    const fileList = Array.from(newFiles);

    const validFiles = fileList.filter((file) => {
      if (maxSize && file.size > maxSize) return false;
      if (minSize && file.size < minSize) return false;
      return true;
    });

    if (multiple) {
      onChange?.(validFiles);
    } else {
      onChange?.(validFiles[0] || null);
    }

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    if (disabled) return;

    const newFiles = e.dataTransfer.files;
    if (!newFiles.length) return;

    const fileList = Array.from(newFiles);

    // Validate file types
    const validFiles = fileList.filter((file) => {
      if (!accept) return true;

      const fileType = file.type;
      const fileExt = `.${file.name.split(".").pop()?.toLowerCase()}`;

      return accept.split(",").some((type) => {
        type = type.trim();
        if (type.startsWith(".")) {
          return type.toLowerCase() === fileExt;
        } else if (type.includes("*")) {
          const [main, sub] = type.split("/");
          const [fileMain] = fileType.split("/");
          return sub === "*" ? main === fileMain : type === fileType;
        } else {
          return type === fileType;
        }
      });
    });

    if (multiple) {
      onChange?.(validFiles);
    } else {
      onChange?.(validFiles[0] || null);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!disabled && dragAndDrop) {
      setIsDragging(true);
    }
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const clearFiles = () => {
    onChange?.(multiple ? [] : null);
  };

  const removeFile = (index: number) => {
    if (multiple && Array.isArray(value)) {
      const newFiles = [...value];
      newFiles.splice(index, 1);
      onChange?.(newFiles);
    } else {
      onChange?.(null);
    }
  };

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const containerClass = cn(
    "flex flex-col w-full gap-1",
    classNames?.container,
    className
  );

  const inputContainerClass = cn(
    "flex items-center border rounded-md transition-colors bg-[#2c2c2c] overflow-hidden",
    error ? "border-red-500" : "border-[#4a4a4a]",
    disabled && "opacity-60 cursor-not-allowed",
    isDragging && "border-dashed border-blue-500 bg-blue-500/10",
    classNames?.inputContainer
  );

  const renderFilePreview = () => {
    if (!showFilePreview || files.length === 0) return null;

    return (
      <div className={cn("mt-2 space-y-2", classNames?.previewContainer)}>
        {files.map((file, index) => (
          <div
            key={`${file.name}-${index}`}
            className={cn(
              "flex items-center bg-[#2a2b2d] p-2 rounded-md gap-2",
              classNames?.fileItem
            )}
          >
            {fileIcon || <IconFile size={18} />}
            <div className="flex-1 truncate text-sm">{file.name}</div>
            <div className="text-xs text-gray-400">
              {(file.size / 1024).toFixed(0)}KB
            </div>
            {clearable && (
              <button
                type="button"
                onClick={() => removeFile(index)}
                className="text-gray-300 hover:text-red-500"
                aria-label="Remove file"
              >
                <IconX size={16} />
              </button>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={containerClass}>
      {label && (
        <label
          className={cn(
            "text-sm ml-1 flex items-center gap-1",
            disabled && "opacity-60 cursor-not-allowed",
            classNames?.label
          )}
        >
          {label}
          {required && (
            <span className={cn("text-red-500 text-sm", classNames?.required)}>
              *
            </span>
          )}
        </label>
      )}

      <div
        className={inputContainerClass}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {leftSection && (
          <div
            className={cn(
              "flex items-center justify-center text-gray-300 pl-2",
              classNames?.leftSection
            )}
          >
            {leftSection}
          </div>
        )}

        <div className="flex-1 flex items-center py-2 px-3">
          <input
            ref={inputRef}
            id={inputId}
            type="file"
            accept={accept}
            multiple={multiple}
            disabled={disabled}
            onChange={handleFileChange}
            className="hidden"
            {...props}
          />

          <div
            onClick={handleButtonClick}
            className={cn(
              "w-full cursor-pointer flex items-center justify-center px-4 py-2",
              dragAndDrop && "min-h-[80px] flex-col gap-2",
              classNames?.dropzone
            )}
          >
            <IconUpload
              size={dragAndDrop ? 24 : 18}
              className="mr-2 text-gray-400"
            />
            <span className="text-gray-300">
              {files.length > 0
                ? `${files.length} file${files.length > 1 ? "s" : ""} selected`
                : placeholder}
            </span>
            {dragAndDrop && (
              <span className="text-xs text-gray-400">
                or drag and drop files here
              </span>
            )}
          </div>

          {files.length > 0 && clearable && (
            <button
              type="button"
              onClick={clearFiles}
              className="ml-2 text-gray-400 hover:text-red-500"
              aria-label="Clear files"
            >
              <IconX size={18} />
            </button>
          )}
        </div>

        {rightSection && (
          <div
            className={cn(
              "flex items-center justify-center text-gray-300 pr-2",
              classNames?.rightSection
            )}
          >
            {rightSection}
          </div>
        )}
      </div>

      {renderFilePreview()}

      {(error || hint) && (
        <p
          className={cn(
            "text-xs ml-1",
            error ? "text-red-500" : "text-gray-300",
            disabled && "opacity-60 cursor-not-allowed",
            classNames?.hint
          )}
        >
          {error || hint}
        </p>
      )}
    </div>
  );
};

FileInput.displayName = "FileInput";
